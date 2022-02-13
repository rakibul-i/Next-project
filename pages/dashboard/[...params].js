import Head from "next/head";
import { useRouter } from "next/router";
import DashboardRoutes from "../../components/DashboardRoutes";
import Header from "../../components/Header";

const Dashboard = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <Header />
        <DashboardRoutes />
      </main>
    </div>
  );
};

export default Dashboard;
