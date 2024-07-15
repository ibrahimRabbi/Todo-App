import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <h1 className="text-3xl font-semibold mt-4 text-center">Todo App</h1>
            <TodoContainer/>
        </Container>
    );
};

export default Todo;