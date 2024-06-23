//建议将注入key的类型放在一个单独的文件中
import type { InjectionKey } from "vue";
export const key = Symbol() as InjectionKey<string>;
