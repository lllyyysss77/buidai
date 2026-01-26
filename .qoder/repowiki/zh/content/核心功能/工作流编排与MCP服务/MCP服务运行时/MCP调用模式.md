# MCP调用模式

<cite>
**本文档引用文件**
- [智言万象.vue](file://pages/智言万象.vue)
- [ProductFeatures.vue](file://components/landing/ProductFeatures.vue)
</cite>

## 目录
1. [引言](#引言)
2. [MCP调用模式概述](#mcp调用模式概述)
3. [SSE调用模式详解](#sse调用模式详解)
4. [StreamableHTTP调用模式详解](#streamablehttp调用模式详解)
5. [性能对比与选型建议](#性能对比与选型建议)
6. [快速集成体验](#快速集成体验)
7. [前端调用代码示例](#前端调用代码示例)
8. [结论](#结论)

## 引言
智言AI平台为企业级AI应用开发提供了强大的基础设施支持，其中MCP（Model Context Protocol）服务作为连接模型与数据的核心协议，实现了智能体对本地文件、数据库及第三方API服务的安全高效访问。本文档深入解析MCP服务支持的两种核心调用模式：SSE（Server-Sent Events）和StreamableHTTP，详细阐述其技术实现、性能特征及适用场景，为开发者提供全面的技术参考。

**Section sources**
- [智言万象.vue](file://pages/智言万象.vue#L739-L744)

## MCP调用模式概述
MCP（Model Context Protocol）是智言AI平台实现模型与数据无缝连接的标准化接口协议。通过MCP服务，智能体能够安全、高效地访问各类数据源，包括本地文件系统、数据库以及第三方API服务。平台支持两种核心调用模式以满足不同场景下的实时性需求：SSE（Server-Sent Events）和StreamableHTTP。

在智言万象.vue页面中，"MCP调用"功能项明确指出其支持以SSE和StreamableHTTP方式调用MCP工具，体现了平台对实时流式响应特性的重视。这两种模式均旨在提供低延迟的流式数据传输，但在连接管理、错误恢复和实现机制上存在显著差异。

**Section sources**
- [智言万象.vue](file://pages/智言万象.vue#L739-L744)

## SSE调用模式详解
SSE（Server-Sent Events）是一种基于HTTP的单向通信协议，允许服务器向客户端推送实时更新。在MCP服务中，SSE模式被用于实现服务器到客户端的持续流式响应。

### 事件流结构
SSE的事件流由一系列以UTF-8编码的文本消息组成，每条消息遵循特定的格式规范：
- `data:` 字段包含实际传输的数据内容
- `event:` 字段定义事件类型
- `id:` 字段为每条消息分配唯一标识符，用于断线重连时的定位
- `retry:` 字段建议客户端重连的间隔时间（毫秒）

这种结构化的消息格式确保了数据传输的可靠性和可追溯性，特别适用于需要持续接收服务器更新的场景。

### 重连机制
SSE内置了强大的自动重连机制，这是其相较于传统HTTP请求的核心优势之一。当网络连接中断时，浏览器会根据服务器指定的`retry`时间间隔自动尝试重新连接，并通过`Last-Event-ID`头部告知服务器上次成功接收的消息ID，从而实现断点续传，避免数据丢失。

这种机制极大地提升了流式服务的鲁棒性，确保在不稳定的网络环境下仍能维持服务的连续性。

**Section sources**
- [智言万象.vue](file://pages/智言万象.vue#L739-L744)

## StreamableHTTP调用模式详解
StreamableHTTP是一种基于分块传输编码（Chunked Transfer Encoding）的HTTP扩展模式，它允许服务器在生成响应的过程中逐步将其发送给客户端，而无需等待整个响应体完全生成。

### 分块传输实现
在MCP服务中，StreamableHTTP通过HTTP/1.1的分块编码机制实现流式传输：
1. 服务器在响应头中设置`Transfer-Encoding: chunked`
2. 响应体被分割成一系列数据块，每块包含：
   - 块大小（十六进制）
   - 数据内容
   - CRLF（回车换行）
3. 以大小为0的块作为流结束的标志

这种实现方式充分利用了现有的HTTP基础设施，兼容性好，且能有效降低客户端的等待延迟，实现渐进式的内容呈现。

### 连接管理
与SSE不同，StreamableHTTP本身不包含内置的重连逻辑。连接管理需要由客户端应用层自行实现。当连接意外中断时，客户端需要重新发起完整的HTTP请求，这可能导致部分数据的重复处理或丢失，因此在实现时需要结合应用的具体需求设计相应的补偿机制。

**Section sources**
- [智言万象.vue](file://pages/智言万象.vue#L739-L744)

## 性能对比与选型建议
下表对比了SSE和StreamableHTTP两种调用模式在关键性能指标上的差异：

| 特性 | SSE | StreamableHTTP |
| :--- | :--- | :--- |
| **延迟** | 极低，服务器可立即推送数据 | 低，但需等待首个数据块生成 |
| **连接管理** | 内置自动重连和断点续传机制 | 需应用层自行实现重连逻辑 |
| **错误恢复** | 通过`Last-Event-ID`实现精准恢复 | 通常需要重新开始请求 |
| **协议兼容性** | 需要浏览器或客户端支持EventSource API | 兼容所有支持HTTP/1.1的客户端 |
| **实现复杂度** | 服务器端实现相对简单 | 需要正确处理分块编码 |
| **适用场景** | 实时通知、持续数据流、需要高可靠性的场景 | 一次性大内容流式传输、兼容性要求高的场景 |

**选型建议**：
- 优先选择**SSE**：当应用场景需要高可靠性的持续数据流、自动重连和断点续传功能时，如实时日志监控、股票行情推送等。
- 选择**StreamableHTTP**：当需要最大化客户端兼容性，或传输的是单次、有限长度的大数据流时，如文件下载、大文档生成等。

**Section sources**
- [智言万象.vue](file://pages/智言万象.vue#L739-L744)

## 快速集成体验
智言AI平台通过直观的UI设计和丰富的功能组件，为开发者提供了极佳的快速集成体验。在ProductFeatures.vue组件中，"MCP服务"功能项使用醒目的闪电（Zap）图标进行标识，这一设计语言直观地传达了该功能的"快速"和"高效"特性。

该组件通过三行滚动的特性展示区，将"MCP服务"与"算力套餐"等高性能功能并列展示，强调了其在平台能力矩阵中的核心地位。这种视觉设计不仅提升了功能的可发现性，也向用户传递了平台对性能和效率的承诺，极大地降低了新用户的认知门槛，实现了"开箱即用"的快速集成体验。

**Section sources**
- [ProductFeatures.vue](file://components/landing/ProductFeatures.vue#L111-L130)

## 前端调用代码示例
以下为调用MCP服务的前端代码示例：

### SSE调用示例
```javascript
// 使用EventSource API建立SSE连接
const eventSource = new EventSource('/api/mcp/stream');

eventSource.onmessage = function(event) {
  const data = JSON.parse(event.data);
  // 处理流式响应数据
  console.log('Received:', data);
};

eventSource.onerror = function(err) {
  console.error('SSE error:', err);
  // EventSource会自动重连
};
```

### StreamableHTTP调用示例
```javascript
// 使用fetch API处理分块响应
async function callMCPStream() {
  const response = await fetch('/api/mcp/streamable', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ /* 请求参数 */ })
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while(true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });
    // 处理分块数据
    console.log('Chunk:', chunk);
  }
}
```

**Section sources**
- [智言万象.vue](file://pages/智言万象.vue#L739-L744)

## 结论
智言AI平台通过支持SSE和StreamableHTTP两种核心调用模式，为MCP服务提供了灵活、高效的流式响应能力。SSE模式凭借其内置的重连和断点续传机制，在实时性和可靠性上表现卓越，是持续数据流场景的理想选择。而StreamableHTTP模式则以其广泛的兼容性和简单的协议基础，适用于对兼容性要求较高的场景。

开发者应根据具体的应用需求——如对延迟的敏感度、网络环境的稳定性以及客户端的兼容性要求——来选择最合适的调用模式。平台通过直观的UI设计（如ProductFeatures.vue中的Zap图标）和清晰的文档说明，显著降低了集成复杂度，使开发者能够快速上手并充分发挥MCP服务的强大能力，加速AI应用的构建与迭代。
