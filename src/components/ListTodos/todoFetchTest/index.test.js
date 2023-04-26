// @ts-nocheck
// @ts-ignore
export {};
import axios from "axios";
import { getTodos } from "../todoFetch"; // Импорт функции, которую вы хотите протестировать

// Мокирование библиотеки axios
jest.mock("axios");

describe("getTodos", () => {
  it("should dispatch updateTodos with fetched data", async () => {
    const mockedDispatch = jest.fn(); // Создаем мок функции dispatch
    const mockedTodosData = [
      { title: "do sport", isDone: false, id: 22 },
      { title: "create a new app", isDone: false, id: 23 },
    ]; // Мокированные данные
    axios.get.mockResolvedValue({ data: mockedTodosData }); // Имитируем успешный запрос

    await getTodos(mockedDispatch); // Вызываем тестируемую функцию

    expect(axios.get).toHaveBeenCalledTimes(1); // Проверяем, что метод axios.get вызван 1 раз
    expect(axios.get).toHaveBeenCalledWith("http://localhost:4001/todos"); // Проверяем, что метод axios.get вызван с правильным URL
    expect(mockedDispatch).toHaveBeenCalledTimes(1); // Проверяем, что функция dispatch вызвана 1 раз
    expect(mockedDispatch).toHaveBeenCalledWith(updateTodos(mockedTodosData)); // Проверяем, что функция dispatch вызвана с правильными аргументами
  });

  it("should handle error if fetching todos fails", async () => {
    const mockedDispatch = jest.fn(); // Создаем мок функции dispatch
    const mockedError = new Error("Failed to fetch todos"); // Мокированная ошибка
    axios.get.mockRejectedValue(mockedError); // Имитируем ошибку при запросе

    await getTodos(mockedDispatch); // Вызываем тестируемую функцию

    expect(axios.get).toHaveBeenCalledTimes(1); // Проверяем, что метод axios.get вызван 1 раз
    expect(axios.get).toHaveBeenCalledWith("http://localhost:4001/todos"); // Проверяем, что метод axios.get вызван с правильным URL
    expect(mockedDispatch).not.toHaveBeenCalled(); // Проверяем, что функция dispatch не была вызвана
    expect(console.log).toHaveBeenCalledWith("err :", mockedError); // Проверяем, что ошибка была выведена в консоль
  });
});
