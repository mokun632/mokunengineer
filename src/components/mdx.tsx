import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import { CopyButton } from "@/components/copy-button";
import rehypeKatex from "rehype-katex";
import { highlight } from "sugar-high";

const CustomLink = (props: ComponentPropsWithoutRef<"a">) => {
  let href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Code = (props: ComponentPropsWithoutRef<"code">) => {
  const codeStr = props.children?.toString() || "";
  let codeHTML = highlight(codeStr);
  return (
    <>
      <div className="flex justify-end">
        <CopyButton text={codeStr} />
      </div>
      <div className="overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
      </div>
    </>
  );
};

const Pre = (props: ComponentPropsWithoutRef<"pre">) => {
  const { children } = props;
  return <pre className="grid gap-4 py-3 px-5">{children}</pre>;
};

export const CustomMDX = (props: MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{
        ...{
          a: CustomLink,
          pre: Pre,
          code: Code,
        },
        ...(props.components || {}),
      }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath, remarkBreaks],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  );
};
