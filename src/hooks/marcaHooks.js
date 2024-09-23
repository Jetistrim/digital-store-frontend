import { useMutation, useQuery } from "@tanstack/react-query";
import { API, queryClient } from "../services";

export const useGetMarcas = () => {
  return useQuery({
    queryKey: ["marcas"],
    queryFn: async () => {
      const response = await API.get("/marcas");
      return response.data;
    },
    refetchOnWindowFocus: false
  })
}

export const useCreateMarca = (() => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await API.post("/marcas", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["marcas"]
      })
    }
  })
});

export const useUpdateMarca = (() => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await API.put(`/marcas`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["marcas"]
      })
    }
  })
});

export const useDestroyMarca = (() => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await API.delete(`/marcas/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["marcas"]
      })
    }
  })
});