import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o elemento contém o texto "Adicionar"', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('btnAdd');
    expect(btn).toBeDefined();
    expect(btn.value).toBe('Adicionar')
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText, getByTestId} = render(<App />);
    const inputTodo = getByLabelText('Tarefa:');
    const btnSend = getByTestId('btnAdd');
    expect(inputTodo).toBeInTheDocument();
    const NEW_TASK = 'Nova Tarefa';
    fireEvent.change(inputTodo, { target: { value: NEW_TASK } });
    expect(inputTodo.value).toBe(NEW_TASK);
    expect(inputTodo).toHaveValue(NEW_TASK);
    fireEvent.click(btnSend);
    expect(inputTodo).toHaveValue('');
  });
});