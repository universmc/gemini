import { ChatCompletion } from 'groq-sdk/resources/chat';
export interface ChatCompletionChunk {
    id: string;
    choices: Array<ChatCompletionChunk.Choice>;
    created: number;
    model: string;
    object: 'chat.completion.chunk';
    system_fingerprint?: string;
    x_groq?: ChatCompletionChunk.XGroq;
}
export declare namespace ChatCompletionChunk {
    interface Choice {
        delta: Choice.Delta;
        finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call' | null;
        index: number;
        logprobs?: Choice.Logprobs | null;
    }
    namespace Choice {
        interface Delta {
            content?: string | null;
            function_call?: Delta.FunctionCall;
            role?: 'system' | 'user' | 'assistant' | 'tool';
            tool_calls?: Array<Delta.ToolCall>;
        }
        namespace Delta {
            interface FunctionCall {
                arguments?: string;
                name?: string;
            }
            interface ToolCall {
                index: number;
                id?: string;
                function?: ToolCall.Function;
                type?: 'function';
            }
            namespace ToolCall {
                interface Function {
                    arguments?: string;
                    name?: string;
                }
            }
        }
        interface Logprobs {
            content: Array<ChatCompletionTokenLogprob> | null;
        }
    }
    type XGroq = {
        id?: string;
        usage?: ChatCompletion.Usage;
        error?: string;
    };
}
export interface ChatCompletionTokenLogprob {
    token: string;
    bytes: Array<number> | null;
    logprob: number;
    top_logprobs: Array<ChatCompletionTokenLogprob.TopLogprob>;
}
export declare namespace ChatCompletionTokenLogprob {
    interface TopLogprob {
        token: string;
        bytes: Array<number> | null;
        logprob: number;
    }
}
//# sourceMappingURL=chat_completions_ext.d.ts.map