import { createServer } from "miragejs";

let tasks = [
  { id: 1, title: "Inception", description: "2010" },
  { id: 2, title: "Interstellar", description: "2014" },
  { id: 3, title: "Dunkirk", description: "2017" },
];

createServer({
  routes() {
    this.namespace = "api";

    this.post("/tasks", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);
      tasks.push(attrs);
      return { task: attrs };
    });

    this.get("/tasks", () => {
      return {
        tasks,
      };
    });
  },
});
