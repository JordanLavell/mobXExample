import { useEffect } from "react";
import "./styles.css";
import { Button, Container } from "semantic-ui-react";
import { NavBar } from "./NavBar";
import LoadingComponent from "./LoadingComponent";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Button content='Chang my color' onClick={() => activityStore.setOrgcolors("yellow")} />
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
