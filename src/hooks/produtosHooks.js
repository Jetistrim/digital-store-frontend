import { useMutation, useQuery } from "@tanstack/react-query";
import { API, queryClient } from "../services";

// importa todos os produtos
export const useGetProdutos = () => {
    return useQuery({
        queryKey: ["produtos"],
        queryFn: async () => {
            const response = await API.get("/produtos");
            return response.data;
        },
        refetchOnWindowFocus: false,
    });
};

// importa os produtos em destaque
export const useGetProdutosDestaque = () => {
    return useQuery({
        queryKey: ["produtos"],
        queryFn: async () => {
            const response = await API.get("/produtos/destaques");
            return response.data;
        },
        refetchOnWindowFocus: false,
    });
};

// importa um produto
export const useGetProduto = () => {
    return useQuery({
        queryKey: ["produtos"],
        queryFn: async (id) => {
            const response = await API.get(`/produtos/${id}`);
            return response.data;
        },
        refetchOnWindowFocus: false,
    });
};

//Cria um novo produto
export const useCreateProduto = () => {
    return useMutation({
        mutationFn: async (data) => {
            const response = await API.post("/produtos", data);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["produtos"],
            });
        },
    });
};

// Atualiza um produto
export const useUpdateProduto = () => {
    return useMutation({
        mutationFn: async (data) => {
            const response = await API.put(`/produtos`, data);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["produtos"],
            });
        },
    });
};

// Deleta um produto
export const useDestroyProduto = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await API.delete(`/produtos/${id}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["produtos"],
            });
        },
    });
};