import Link from "next/link";

const AccessoriesLink = () => {
  const linksList = [
    {
      title: "HOME",
      url: "bags",
    },
    {
      title: "ABOUT",
      url: "travel",
    },
    {
      title: "CATEGORY",
      url: "accessories",
    },
    {
      title: "CONTACT US",
      url: "gifting",
    },
    {
      title: "PORTFOLIO",
      url: "jewellery",
    },
  ];
  return (
    <div className="mx-auto py-2 flex justify-center gap-4 lg:w-1/2 lg:gap-8">
      {linksList.map((link, i) => (
        <Link
          key={i}
          href={`/#${link.url}`}
          className="text-slate-300 transition-colors hover:text-yellow-200"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default AccessoriesLink;
