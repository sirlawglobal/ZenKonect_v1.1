import Content from "./Content"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  )
}

export default Dashboard
