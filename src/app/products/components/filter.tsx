/** @format */

export interface ProductFilterProps {
  filters: string[];
}
export function ProductFilter({ filters }: ProductFilterProps) {
  return (
    <div className="flex gap-4">
      {filters.map((filter) => (
        <button key={filter}>{filter}</button>
      ))}
    </div>
  );
}
