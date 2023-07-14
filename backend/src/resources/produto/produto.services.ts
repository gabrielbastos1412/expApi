// Arquivo src/resources/produto/produto.service.ts
import { Produto } from '../../models/Produto';
import { ProdCreateDto } from './produto.types';

const getAllProdutos = async (): Promise<Produto[]> => {
 const produtos = await Produto.findAll();
 return produtos.map((p) => p.toJSON());
};
const createProduto = async (produto: ProdCreateDto)
: Promise<Produto> => {
 return await Produto.create(produto);
};
export { getAllProdutos, createProduto };