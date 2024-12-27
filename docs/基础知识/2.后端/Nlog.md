---
description:.Net中Nlog的使用
---
# Nlog

## 什么是Nlog

### 简介
NLog 是一个灵活且功能强大的 .NET 日志框架，适用于多种应用场景。它支持多目标（Targets）、多规则（Rules）以及丰富的日志格式化选项，常用于记录调试信息、异常日志、性能监控等。

### 特性

- **多目标支持**：日志可以同时输出到文件、数据库、控制台等。
- **多规则配置**：支持为不同的日志级别或来源指定不同的日志目标。
- **异步日志**：提高性能，避免日志写入影响应用的主要线程。
- **结构化日志**：支持 JSON 格式日志输出，便于后续分析。
- **易于集成**：与 ASP.NET Core、WinForms、WPF 等框架无缝集成。

## 使用

### 安装
可以通过 NuGet 安装 NLog




### 基础信息

日志等级:
- Trace

用于非常详细的诊断信息。
场景：函数入口/出口、变量值跟踪等。
- Debug

用于调试应用程序时的诊断信息。
场景：调试逻辑流程、捕获开发环境中的问题。
- Info

一般性的信息，用于描述应用程序的运行状态。
场景：记录用户操作、系统启动或停止等事件。
- Warn

警告信息，表示潜在问题或非正常状态，但不影响程序运行。
场景：资源不足、配置项缺失、性能下降等。
- Error

错误信息，表示程序遇到了问题，但仍然可以运行。
场景：捕获未处理的异常、外部系统连接失败等。
- Fatal

严重错误，通常表示程序无法继续运行。
场景：系统崩溃、数据丢失等。

### 配置

在项目根目录中添加 NLog.config 文件，示例如下：
```xml
 <?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      autoReload="true"
      throwExceptions="false"
      internalLogLevel="Off" internalLogFile="c:\temp\nlog-internal.log">

  <extensions>
    <add assembly="NLog.Web.AspNetCore" />
  </extensions>
  <targets>
    <!-- 文件日志 -->
    <target name="file" xsi:type="File" fileName="logs/${shortdate}.log"
            layout="${longdate}|${aspnet-traceidentifier}|${level}|${logger}|[TenantId:${scopeproperty:TenantId}, UserId:${scopeproperty:UserId}]|${message}" />
    <!-- 错误日志 -->
    <target name="errorfile" xsi:type="File" fileName="logs/error-${shortdate}.log"
            layout="${longdate}|${aspnet-traceidentifier}|${level}|${logger}|[TenantId:${scopeproperty:TenantId}, UserId:${scopeproperty:UserId}]|${message}" />
  </targets>
  <rules>
    <!-- Info 和 Debug 日志存入普通文件 -->
    <logger name="*" minlevel="Debug" maxlevel="Error"  writeTo="file" />
    <!-- Error 日志存入单独的错误日志文件 -->
    <logger name="*" minlevel="Error" writeTo="errorfile" />
  </rules>
</nlog>
```
代码中使用：
```csharp
using NLog;

class Program
{
    private static readonly Logger Logger = LogManager.GetCurrentClassLogger();

    static void Main(string[] args)
    {
        Logger.Trace("This is a trace log.");
        Logger.Debug("This is a debug log.");
        Logger.Info("This is an info log.");
        Logger.Warn("This is a warning log.");
        Logger.Error("This is an error log.");
        Logger.Fatal("This is a fatal log.");

        LogManager.Shutdown(); // 确保在应用程序退出时刷新所有日志
    }
}
```
### 高级配置

#### 1.在配置文件中启用异步日志以提升性能：

```xml
<target name="asyncFile" xsi:type="AsyncWrapper">
  <target xsi:type="File" fileName="logs/${shortdate}.log" layout="${longdate} | ${level} | ${message}" />
</target>
```
然后在规则中使用 asyncFile：

```xml
<logger name="*" minlevel="Info" writeTo="asyncFile" />
```
#### 2.可以将日志存储到数据库中：

```xml
<target name="database" xsi:type="Database"
        connectionString="Server=localhost;Database=Logs;User Id=myUsername;Password=myPassword;"
        commandText="INSERT INTO LogTable (Time, Level, Logger, Message) VALUES (@time, @level, @logger, @message)">
  <parameter name="@time" layout="${longdate}" />
  <parameter name="@level" layout="${level}" />
  <parameter name="@logger" layout="${logger}" />
  <parameter name="@message" layout="${message}" />
</target>
```

#### 3.常用的日志布局参数

NLog 提供了一系列丰富的布局渲染器（Layout Renderers），可以用来格式化日志内容。以下是一些常用的布局参数：

**时间相关**
- ${longdate}：完整日期和时间，格式为 yyyy-MM-dd HH:mm:ss.ffff.
- ${shortdate}：仅日期，格式为 yyyy-MM-dd.
- ${date}：自定义格式的日期时间，例如 ${date:format=HH:mm:ss}.

**日志级别相关**
- ${level}：日志级别，如 Trace、Debug、Info 等.
- ${uppercase:${level}}：日志级别大写形式.
  
**日志来源相关**
- ${logger}：记录日志的类或名称.
- ${callsite}：记录日志的代码位置，包括类和方法名.
- ${callsite-filename}：记录日志的代码文件名.
- ${callsite-linenumber}：记录日志的行号.
  
**消息和异常相关**
- ${message}：日志消息.
- ${exception}：捕获的异常信息，默认格式为 Message.
- ${exception:format=ToString}：完整异常堆栈信息.
- ${exception:format=Message,StackTrace}：只包含异常消息和堆栈信息.
  
**上下文相关**
- ${aspnet-traceidentifier}：ASP.NET Core 中的请求唯一标识符.
- ${scopeproperty:PropertyName}：从 Scope 中获取指定属性值.
- ${mdlc:PropertyName}：从上下文中获取指定键值（Mapped Diagnostics Logical Context）.
- ${ndlc}：当前上下文中所有嵌套诊断上下文信息.
  
**性能和系统相关**
- ${threadid}：线程 ID.
- ${processid}：当前进程的 ID.
- ${machinename}：当前机器名.
- ${environment-UserName}：当前用户名称.
