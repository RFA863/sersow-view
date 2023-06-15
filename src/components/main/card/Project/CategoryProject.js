import font from "@/app/font.module.css";

export default function CategoryProject({ categories }) {
  return categories !== null ? (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((item) => (
        <div className={` ${font.Satoshi_c3bold} flex justify-center w-20 rounded-full border border-slate-500 py-1 px-2`} >
          {item.name}
        </div>
      ))}
    </div>
  ) : null;
}