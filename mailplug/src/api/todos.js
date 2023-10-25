import axios from "axios";

// delete - api/v1/todos/:id
export async function removeTodoApi(dispatch, id) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/v1/todos/${id}`
    );

    dispatch({ type: "REMOVE", id });
    return response;
  } catch (error) {
    console.log("todos 삭제 실패: ", error);
    throw error;
  }
}

// update - api/v1/todos/:id
export async function updateTodoContentApi(dispatch, id, editedText) {
  try {
    const response = await axios.patch(
      `http://localhost:8080/api/v1/todos/${id}`,
      { content: editedText } // 수정된 내용을 서버에 보냄
    );

    dispatch({ type: "EDIT", id, content: editedText });
    return response; // 반환값 추가
  } catch (error) {
    console.error("업데이트 에러: ", error);
    throw error; // 에러 발생시 에러를 다시 throw
  }
}

// get - api/v1/todos
export async function getFetchTodos(dispatch) {
  const apiUrl = "http://localhost:8080/api/v1/todos";

  try {
    const response = await axios.get(apiUrl);
    dispatch({ type: "SET_TODOS", todos: response.data }); // API 응답 데이터를 TodoContext에 업데이트
    return response.data; // API 응답 데이터를 리턴
  } catch (error) {
    console.error("API 요청 실패");
    console.error(error);
    throw error; // 에러를 다시 던져서 상위로 전파
  }
}

// fetch - api/v1/todos/:id
export async function toggleTodoApi(dispatch, id, isCompleted) {
  const apiUrl = `http://localhost:8080/api/v1/todos/${id}`;

  try {
    const response = await axios.patch(
      apiUrl,
      { isCompleted: !isCompleted } // 토글 작업을 수행하는 API 요청
    );

    // 토글 디스패치
    dispatch({ type: "TOGGLE", id, isCompleted: !isCompleted });

    return response;
  } catch (error) {
    console.error("토글링 에러:", error);
  }
}

export async function createTodoApi(dispatch, value) {
  try {
    const response = await axios.post("http://localhost:8080/api/v1/todos", {
      content: value,
      isCompleted: false,
    });

    dispatch({
      type: "CREATE",
      todo: {
        id: response.data.id,
        content: response.data.content,
        isCompleted: response.data.isCompleted,
      },
    });

    return response;
  } catch (error) {
    console.error("API 요청 실패");
    console.error(error);
  }
}
