// src/components/common/SectionTitle.tsx
type SectionTitleProps = {
  title: string;
  paragraph?: string;
  mb?: string; // ex: "44px" ou "2rem"
};

export default function SectionTitle({
  title,
  paragraph,
  mb = "44px",
}: SectionTitleProps) {
  return (
    <div style={{ marginBottom: mb }}>
      <h2 className="mb-4 text-3xl font-bold text-[#5BAA9C] dark:text-white sm:text-4xl">
        {title}
      </h2>
      {paragraph && (
        <p className="text-base text-body-color dark:text-gray-300">{paragraph}</p>
      )}
    </div>
  );
}
