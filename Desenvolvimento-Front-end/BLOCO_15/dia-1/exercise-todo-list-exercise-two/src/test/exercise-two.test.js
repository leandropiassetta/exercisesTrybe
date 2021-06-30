import React from 'react';
import { render, fireEvent, cleanup, getByTestId } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByTestId, getAllByTestId } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const inputTodo = getByTestId('input-todo');
    const btnAdd = getByTestId('btnAdd');

    listTodo.forEach(toDo => {
      fireEvent.change(inputTodo, { target: { value: toDo } });
      fireEvent.click(btnAdd);
    });

    const allTasks = getAllByTestId('todo-item');
    expect(allTasks.length).toBe(listTodo.length);
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const NewTask = { listTodo: 'Nova Tarefa' }
    
    const { getByText } = render(<Item content={ NewTask.listTodo }/>);
    const task = getByText(NewTask.listTodo)
    expect(task).toBeInTheDocument();
  })
})
