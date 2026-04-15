import React from "react";

import useApps from "@/hooks/useApps";

import Link from "next/link";
import AppCard from "../ui/AppCard";
// import { ClockLoader } from "react-spinners";

// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async () => {
  //   const apps = use(appsPromise);
  //   console.log("Apps", apps);
  //   const data = useLoaderData();
  //   console.log("Data from Trending Apps vaya home page", data);

  //   const [apps, setApps] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("/data.json");
  //       const data = await res.json();
  //       console.log("Data fetching using use effect", data);
  //       setTimeout(() => {
  //         setApps(data);
  //         setLoading(false);
  //       }, 2000);
  //     };
  //     fetchData();
  //   }, []);

  //   console.log("Apps Data", apps);
  //   console.log("Loading", loading);

  /**Custom hooks use */
  // const { apps, loading } = useApps();
  const apps = await appsPromise();

  return (
    <div>
      <div>
        {/* Section header */}
        Total Apps: {apps.length}
        {/* {loading ? (
          <div className="flex justify-center items-center">
            {" "}
            <ClockLoader color="#c92222" />
          </div>
        ) : ( */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 container mx-auto">
          {apps.slice(0, 9).map((app, ind) => {
            return <AppCard key={ind} app={app} />;
          })}
        </div>
        <div className="text-center mt-4">
          <Link href={"/apps"}>
            <button className="btn">View All</button>
          </Link>
        </div>
      </div>
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa
          nobis dolorum nulla repellat repudiandae doloribus sequi veritatis
          eveniet provident alias molestiae, corporis illo deserunt molestias
          fuga, non eum? Sunt!
        </p>
      </div>
    </div>
  );
};

export default TrendingApps;
