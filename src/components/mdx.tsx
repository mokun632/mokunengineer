import Link from "next/link";
import React, {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
} from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import { CopyButton } from "@/components/copy-button";
import rehypeKatex from "rehype-katex";
import { highlight } from "sugar-high";
import {
  CircleAlert,
  Lightbulb,
  MessageSquareWarning,
  OctagonAlert,
} from "lucide-react";

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

const createHeading = (level: number) => {
  const Heading = (props: ComponentPropsWithoutRef<"h1">) => {
    const slug = props.children as string;
    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor",
      }),
      slug,
    ]);
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
};

type AlertType =
  | "[!NOTE]"
  | "[!TIP]"
  | "[!IMPORTANT]"
  | "[!WARNING]"
  | "[!CAUTION]";

const AlertBlock = ({
  children,
  alertLable,
}: {
  children: ReactElement;
  alertLable: AlertType;
}) => {
  return (
    <div>
      <p className="flex gap-1">
        <CircleAlert />
        {alertLable}
      </p>
      {children}
    </div>
  );
};

const CustomBlockquote = (props: ComponentPropsWithoutRef<"blockquote">) => {
  const children = props.children;
  const childrensChildren = (children as ReactElement[])[1].props.children;
  const alertStr = childrensChildren[0] as AlertType;

  if (
    alertStr === "[!NOTE]" ||
    alertStr === "[!TIP]" ||
    alertStr === "[!IMPORTANT]" ||
    alertStr === "[!WARNING]" ||
    alertStr === "[!CAUTION]"
  ) {
    const alertContent = (childrensChildren as ReactNode[]).slice(2);

    if (alertStr === "[!NOTE]") {
      return (
        <div className="border-l-4 px-2 border-l-blue-700">
          <div className="flex gap-1 items-center">
            <CircleAlert className="w-6 h-6" />
            NOTE
          </div>
          {alertContent}
        </div>
      );
    }

    if (alertStr === "[!TIP]") {
      return (
        <div className="border-l-4 px-2 border-l-green-700">
          <div className="flex gap-1 items-center text-green-700">
            <Lightbulb className="w-6 h-6" />
            TIP
          </div>
          {alertContent}
        </div>
      );
    }

    if (alertStr === "[!IMPORTANT]") {
      return (
        <div className="border-l-4 px-2 border-l-purple-700">
          <div className="flex gap-1 items-center text-purple-700">
            <MessageSquareWarning className="w-6 h-6" />
            IMPORTANT
          </div>
          {alertContent}
        </div>
      );
    }

    if (alertStr === "[!WARNING]") {
      return (
        <div className="border-l-4 px-2 border-l-yellow-500">
          <div className="flex gap-1 items-center">
            <MessageSquareWarning className="w-6 h-6" />
            WARNING
          </div>
          {alertContent}
        </div>
      );
    }

    if (alertStr === "[!CAUTION]") {
      return (
        <div className="border-l-4 px-2 border-l-red-700">
          <div className="flex gap-1 items-center text-red-700">
            <OctagonAlert className="w-6 h-6" />
            CAUTION
          </div>
          {alertContent}
        </div>
      );
    }
  }

  return <blockquote>{children}</blockquote>;
};

export const CustomMDX = (props: MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{
        ...{
          a: CustomLink,
          h1: createHeading(1),
          h2: createHeading(2),
          h3: createHeading(3),
          h4: createHeading(4),
          h5: createHeading(5),
          h6: createHeading(6),
          pre: Pre,
          code: Code,
          blockquote: CustomBlockquote,
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
