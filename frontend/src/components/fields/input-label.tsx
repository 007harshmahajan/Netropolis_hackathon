export default function InputLabel({
  name,
  label,
  required,
  optional,
}: {
  name: string;
  label?: React.ReactNode | string;
  required?: boolean;
  optional?: boolean;
}) {
  if (!label) {
    return null;
  }
  return (
    <label
      htmlFor={name}
      className="prose-b2-medium text-neutral-5 flex gap-1 items-center"
    >
      <span>{label}</span>
      {required ? (
        <span className="text-error-20">*</span>
      ) : (
        optional && (
          <span className="text-sm font-normal text-neutral-40">
            (optional)
          </span>
        )
      )}
    </label>
  );
}
