import { Pre } from "@/app/contents/_components/pre";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => {
      return (
        <Pre
          {...(props as {
            children: React.ReactNode;
            raw: string;
            "data-language"?: string;
          })}
        />
      );
    },
  };
}
