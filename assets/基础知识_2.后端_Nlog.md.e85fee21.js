import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.dadbb688.js";const F=JSON.parse('{"title":"Nlog","description":"","frontmatter":{"0":"d","1":"e","2":"s","3":"c","4":"r","5":"i","6":"p","7":"t","8":"i","9":"o","10":"n","11":":","12":".","13":"N","14":"e","15":"t","16":"中","17":"N","18":"l","19":"o","20":"g","21":"的","22":"使","23":"用"},"headers":[],"relativePath":"基础知识/2.后端/Nlog.md","filePath":"基础知识/2.后端/Nlog.md","lastUpdated":1735269804000}'),o={name:"基础知识/2.后端/Nlog.md"},p=l(`<h1 id="nlog" tabindex="-1">Nlog <a class="header-anchor" href="#nlog" aria-label="Permalink to &quot;Nlog&quot;">​</a></h1><h2 id="什么是nlog" tabindex="-1">什么是Nlog <a class="header-anchor" href="#什么是nlog" aria-label="Permalink to &quot;什么是Nlog&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>NLog 是一个灵活且功能强大的 .NET 日志框架，适用于多种应用场景。它支持多目标（Targets）、多规则（Rules）以及丰富的日志格式化选项，常用于记录调试信息、异常日志、性能监控等。</p><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h3><ul><li><strong>多目标支持</strong>：日志可以同时输出到文件、数据库、控制台等。</li><li><strong>多规则配置</strong>：支持为不同的日志级别或来源指定不同的日志目标。</li><li><strong>异步日志</strong>：提高性能，避免日志写入影响应用的主要线程。</li><li><strong>结构化日志</strong>：支持 JSON 格式日志输出，便于后续分析。</li><li><strong>易于集成</strong>：与 ASP.NET Core、WinForms、WPF 等框架无缝集成。</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>可以通过 NuGet 安装 NLog</p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><h4 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h4><p>日志等级:</p><ul><li>Trace</li></ul><p>用于非常详细的诊断信息。 场景：函数入口/出口、变量值跟踪等。</p><ul><li>Debug</li></ul><p>用于调试应用程序时的诊断信息。 场景：调试逻辑流程、捕获开发环境中的问题。</p><ul><li>Info</li></ul><p>一般性的信息，用于描述应用程序的运行状态。 场景：记录用户操作、系统启动或停止等事件。</p><ul><li>Warn</li></ul><p>警告信息，表示潜在问题或非正常状态，但不影响程序运行。 场景：资源不足、配置项缺失、性能下降等。</p><ul><li>Error</li></ul><p>错误信息，表示程序遇到了问题，但仍然可以运行。 场景：捕获未处理的异常、外部系统连接失败等。</p><ul><li>Fatal</li></ul><p>严重错误，通常表示程序无法继续运行。 场景：系统崩溃、数据丢失等。</p><hr><p>在项目根目录中添加 NLog.config 文件，示例如下：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;"> ?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">nlog</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.nlog-project.org/schemas/NLog.xsd&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xmlns:xsi</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">autoReload</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">throwExceptions</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">internalLogLevel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Off&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">internalLogFile</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;c:\\temp\\nlog-internal.log&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">extensions</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">assembly</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;NLog.Web.AspNetCore&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">extensions</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">targets</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 文件日志 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;file&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xsi:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;File&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fileName</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;logs/\${shortdate}.log&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${longdate}|\${aspnet-traceidentifier}|\${level}|\${logger}|[TenantId:\${scopeproperty:TenantId}, UserId:\${scopeproperty:UserId}]|\${message}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 错误日志 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;errorfile&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xsi:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;File&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fileName</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;logs/error-\${shortdate}.log&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${longdate}|\${aspnet-traceidentifier}|\${level}|\${logger}|[TenantId:\${scopeproperty:TenantId}, UserId:\${scopeproperty:UserId}]|\${message}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">targets</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- Info 和 Debug 日志存入普通文件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">logger</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">minlevel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Debug&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">maxlevel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Error&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">writeTo</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;file&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- Error 日志存入单独的错误日志文件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">logger</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">minlevel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Error&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">writeTo</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;errorfile&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">nlog</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;"> ?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">nlog</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.nlog-project.org/schemas/NLog.xsd&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xmlns:xsi</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">autoReload</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">throwExceptions</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">internalLogLevel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Off&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">internalLogFile</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;c:\\temp\\nlog-internal.log&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">extensions</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">add</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">assembly</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;NLog.Web.AspNetCore&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">extensions</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">targets</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 文件日志 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">target</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;file&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xsi:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;File&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fileName</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;logs/\${shortdate}.log&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${longdate}|\${aspnet-traceidentifier}|\${level}|\${logger}|[TenantId:\${scopeproperty:TenantId}, UserId:\${scopeproperty:UserId}]|\${message}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 错误日志 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">target</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;errorfile&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xsi:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;File&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fileName</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;logs/error-\${shortdate}.log&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${longdate}|\${aspnet-traceidentifier}|\${level}|\${logger}|[TenantId:\${scopeproperty:TenantId}, UserId:\${scopeproperty:UserId}]|\${message}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">targets</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">rules</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- Info 和 Debug 日志存入普通文件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">logger</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">minlevel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Debug&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">maxlevel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Error&quot;</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">writeTo</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;file&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- Error 日志存入单独的错误日志文件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">logger</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">minlevel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Error&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">writeTo</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;errorfile&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">rules</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">nlog</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>代码中使用：</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NLog</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Program</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">readonly</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Logger</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Logger</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> LogManager.</span><span style="color:#B392F0;">GetCurrentClassLogger</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Logger.</span><span style="color:#B392F0;">Trace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This is a trace log.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Logger.</span><span style="color:#B392F0;">Debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This is a debug log.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Logger.</span><span style="color:#B392F0;">Info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This is an info log.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Logger.</span><span style="color:#B392F0;">Warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This is a warning log.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Logger.</span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This is an error log.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Logger.</span><span style="color:#B392F0;">Fatal</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This is a fatal log.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        LogManager.</span><span style="color:#B392F0;">Shutdown</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 确保在应用程序退出时刷新所有日志</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NLog</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Program</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">readonly</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Logger</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Logger</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> LogManager.</span><span style="color:#6F42C1;">GetCurrentClassLogger</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        Logger.</span><span style="color:#6F42C1;">Trace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This is a trace log.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Logger.</span><span style="color:#6F42C1;">Debug</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This is a debug log.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Logger.</span><span style="color:#6F42C1;">Info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This is an info log.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Logger.</span><span style="color:#6F42C1;">Warn</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This is a warning log.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Logger.</span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This is an error log.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Logger.</span><span style="color:#6F42C1;">Fatal</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This is a fatal log.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        LogManager.</span><span style="color:#6F42C1;">Shutdown</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 确保在应用程序退出时刷新所有日志</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="高级" tabindex="-1">高级 <a class="header-anchor" href="#高级" aria-label="Permalink to &quot;高级&quot;">​</a></h4><p>1.在配置文件中启用异步日志以提升性能：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;asyncFile&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xsi:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;AsyncWrapper&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xsi:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;File&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fileName</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;logs/\${shortdate}.log&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${longdate} | \${level} | \${message}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">target</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;asyncFile&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xsi:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;AsyncWrapper&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">target</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xsi:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;File&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fileName</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;logs/\${shortdate}.log&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${longdate} | \${level} | \${message}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">target</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>然后在规则中使用 asyncFile：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">logger</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">minlevel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Info&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">writeTo</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;asyncFile&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">logger</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">minlevel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Info&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">writeTo</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;asyncFile&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>2.可以将日志存储到数据库中：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;database&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xsi:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Database&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">connectionString</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Server=localhost;Database=Logs;User Id=myUsername;Password=myPassword;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">commandText</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;INSERT INTO LogTable (Time, Level, Logger, Message) VALUES (@time, @level, @logger, @message)&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">parameter</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@time&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${longdate}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">parameter</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@level&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${level}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">parameter</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@logger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${logger}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">parameter</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@message&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\${message}&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">target</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;database&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xsi:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Database&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">connectionString</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Server=localhost;Database=Logs;User Id=myUsername;Password=myPassword;&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">commandText</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;INSERT INTO LogTable (Time, Level, Logger, Message) VALUES (@time, @level, @logger, @message)&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">parameter</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@time&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${longdate}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">parameter</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@level&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${level}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">parameter</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@logger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${logger}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">parameter</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@message&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\${message}&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">target</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><hr><p>3.常用的日志布局参数</p><p>NLog 提供了一系列丰富的布局渲染器（Layout Renderers），可以用来格式化日志内容。以下是一些常用的布局参数：</p><p><strong>时间相关</strong></p><ul><li>\${longdate}：完整日期和时间，格式为 yyyy-MM-dd HH:mm:ss.ffff.</li><li>\${shortdate}：仅日期，格式为 yyyy-MM-dd.</li><li>\${date}：自定义格式的日期时间，例如 \${date:format=HH:mm:ss}. <strong>日志级别相关</strong></li><li>\${level}：日志级别，如 Trace、Debug、Info 等.</li><li>\${uppercase:\${level}}：日志级别大写形式. <strong>日志来源相关</strong></li><li>\${logger}：记录日志的类或名称.</li><li>\${callsite}：记录日志的代码位置，包括类和方法名.</li><li>\${callsite-filename}：记录日志的代码文件名.</li><li>\${callsite-linenumber}：记录日志的行号. <strong>消息和异常相关</strong></li><li>\${message}：日志消息.</li><li>\${exception}：捕获的异常信息，默认格式为 Message.</li><li>\${exception:format=ToString}：完整异常堆栈信息.</li><li>\${exception:format=Message,StackTrace}：只包含异常消息和堆栈信息. <strong>上下文相关</strong></li><li>\${aspnet-traceidentifier}：ASP.NET Core 中的请求唯一标识符.</li><li>\${scopeproperty:PropertyName}：从 Scope 中获取指定属性值.</li><li>\${mdlc:PropertyName}：从上下文中获取指定键值（Mapped Diagnostics Logical Context）.</li><li>\${ndlc}：当前上下文中所有嵌套诊断上下文信息. <strong>性能和系统相关</strong></li><li>\${threadid}：线程 ID.</li><li>\${processid}：当前进程的 ID.</li><li>\${machinename}：当前机器名.</li><li>\${environment-UserName}：当前用户名称.</li></ul>`,41),e=[p];function t(r,c,E,y,i,g){return a(),n("div",null,e)}const q=s(o,[["render",t]]);export{F as __pageData,q as default};
