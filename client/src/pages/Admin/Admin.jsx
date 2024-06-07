import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";
import MoviesList from "./MoviesList";
import Theatre from "./Theatre";

const Admin = () => {
  return (
    <div>
      <PageTitle title="Admin" />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane key="1" tab="Movies">
          <MoviesList />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="Theatres">
          <Theatre />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Admin;
