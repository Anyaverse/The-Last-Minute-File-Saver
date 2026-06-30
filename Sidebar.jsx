import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Life Saver</h2>

      <Link to="/">🏠 Dashboard</Link>
      <Link to="/calendar">📅 Calendar</Link>
      <Link to="/assistant">🤖 AI Assistant</Link>
      <Link to="/analytics">📈 Analytics</Link>
      <Link to="/settings">⚙️ Settings</Link>
    </div>
  );
}

export default Sidebar;