/** @format */

const productSpecifications = {
  title: "مشخصات",
  specifications: [
    { id: 1, name: "ابعاد", features: "میلی لیتر ۳۰۰×۳۶۰×۲۶۰" },
    { id: 2, name: "مدل", features: "Fab ۵" },
    { id: 3, name: "وزن", features: "۳۰۰۰ گرم" },
    { id: 4, name: "ظرفیت", features: "۱.۸ لیتر" },
    { id: 5, name: "ظرفیت به نفر", features: "۸  نفر" },
  ],
};

export function ProductSpecifications() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-gray-50 rounded-2xl px-6 py-4">
        <p className="text-base text-gray-950">{productSpecifications.title}</p>
      </div>
      <div className="flex flex-col gap-y-6 border rounded-2xl px-6 py-8">
        {productSpecifications.specifications.map((item) => (
          <div key={item.id} className="flex items-center">
            <p className="text-base text-gray-900 w-[14%]">{item.name}</p>
            <p className="text-sm text-gray-600">{item.features}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
