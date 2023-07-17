import { NavLink } from "react-router-dom";

function Category() {
  const list = [
    { name: "all", topic: "전체" },
    { name: "business", topic: "비지니스" },
    { name: "entertainment", topic: "연예" },
    { name: "general", topic: "일반" },
    { name: "health", topic: "건강" },
    { name: "sports", topic: "스포츠" },
    { name: "technology", topic: "기술" },
  ];

  const myStyle = { backgroundColor: "yellow", color: "red" };

  return (
    <div>
      <h3>카테고리</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.name === "all" ? "/" : `/${item.name}`}
              style={({ isActive }) => (isActive ? myStyle : undefined)}
            >
              {item.topic}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
