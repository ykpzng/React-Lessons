import Blog from "./Blog";

function App() {
  let name = "Tommy";

  let blogInfo = [{ textTitle: "Title 1", textDesc: "Desc 1" }];

  const appClick = (text) => {
    console.log("Show from app component..", text);
    blogInfo.push({ textTitle: "Title 2", textDesc: "Desc 2" });
  };

  return (
    <div style={{ height: "800px", backgroundColor: "yellow" }}>
      <Blog appClick={appClick} blogInfo={blogInfo}></Blog>
    </div>
  );
}

export default App;
