import { CopyButton } from "@/app/contents/_components/copy-button";

export const Pre = ({
  children,
  raw,
  ...props
}: {
  children: React.ReactNode;
  raw: string;
  "data-language"?: string;
}) => {
  const lang = props["data-language"] ?? "text";
  return (
    <pre className="grid gap-4 py-3 px-5">
      <div className="flex justify-between">
        {lang}
        <CopyButton text={raw} />
      </div>
      <div className="overflow-x-scroll">{children}</div>
    </pre>
  );
};
