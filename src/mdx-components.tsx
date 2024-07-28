import { Pre } from "@/app/contents/_components/pre";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => {
      const { children, raw, ...rest } = props as {
        children: React.ReactNode;
        raw: string;
        "data-language"?: string;
      };
      return (
        <Pre
          children={children}
          raw={raw as string}
          data-language={rest["data-language"]}
        />
      );
    },
  };
}
