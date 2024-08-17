import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { CopyButton } from "@/components/copy-button";

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
  const { children, ...rest } = props;
  let codeHTML = highlight(codeStr);
  return (
    <>
      <div className="absolute top-2 right-2">
        <CopyButton text={codeStr} />
      </div>
      <div className="mb-10" />
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...rest} />
    </>
  );
};

const Pre = (props: ComponentPropsWithoutRef<"pre">) => {
  const { children, ...rest } = props;
  return (
    <div className="relative">
      <pre {...rest}>{children}</pre>
    </div>
  );
};

export const CustomMDX = (props: MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{
        ...{
          a: CustomLink,
          code: Code,
          pre: Pre,
        },
        ...(props.components || {}),
      }}
    />
  );
};
