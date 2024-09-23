import "primereact/resources/themes/lara-light-pink/theme.css";
import "primeicons/primeicons.css";
import { styled } from "styled-components";
import { DataTable } from 'primereact/datatable';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { useRef, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { useForm } from "react-hook-form";
import { useCreateMarca, useDestroyMarca, useGetMarcas, useUpdateMarca } from "../hooks/marcaHooks";

const DashboardMarcasContainer = styled.div`

`;

const DashboardMarcas = () => {
    const [customers, setCustomers] = useState([]);
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const { register: registerCreate, handleSubmit: handleCreate, reset: resetCreate } = useForm();
    const { register: registerUpdate, handleSubmit: handleUpdate, setValue: setValueUpdate } = useForm();

    const toast = useRef();

    const { data: listarMarcas } = useGetMarcas();
    const { mutateAsync: criarMarca } = useCreateMarca();
    const { mutateAsync: editarMarca } = useUpdateMarca();
    const { mutateAsync: deletarMarca } = useDestroyMarca();

    function criar(dados) {
        criarMarca(dados, {
            onSuccess: (data) => {
                setVisibleCreate(false);
                resetCreate();
                toast.current.show({
                    detail: data.detail,
                    severity: data.severity
                })
            },
            onError: (error) => {
                setVisibleCreate(false);
                toast.current.show({
                    detail: error.detail,
                    severity: error.severity
                })
            }
        })
    }

    function editar(dados) {
        editarMarca(dados, {
            onSuccess: (data) => {
                setVisibleEdit(false);
                toast.current.show({
                    detail: data.detail,
                    severity: data.severity
                })
            },
            onError: (error) => {
                setVisibleEdit(false);
                toast.current.show({
                    detail: error.detail,
                    severity: error.severity
                })
            }
        })
    }

    function deletar(id) {
        confirmDialog({
            header: 'Aviso',
            message: 'Deseja realmente apagar este item?',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept: () => {
                deletarMarca(id, {
                    onSuccess: (data) => {
                        toast.current.show({
                            detail: data.detail,
                            severity: data.severity
                        })
                    },
                    onError: (error) => {
                        toast.current.show({
                            detail: error.detail,
                            severity: error.severity
                        })
                    }
                })
            }
        });
    }


    return (
        <DashboardMarcasContainer>
            <h3 className="flex justify-between align-middle text-4xl text-black mb-4">
                Marcas
                <button
                    className="border-rounded-md bg-primary-1 p-2 rounded-md text-white text-sm"
                    onClick={() => setVisibleCreate(true)}
                >
                    nova marca
                </button>
            </h3>
            <DataTable
                value={listarMarcas}
                stripedRows
                paginator
                emptyMessage={() => (
                    <div style={{ textAlign: 'center' }}>{'Nenhuma informação encontrada'}</div>
                )}
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="marca_id" header="ID"></Column>
                <Column field="marca_nome" header="Nome"></Column>
                <Column field="marca_descricao" header="Descricao"></Column>
                <Column
                    header="Ações"
                    className="w-1"
                    body={(row) => (
                        <div className="flex gap-3">
                            <i 
                                className="pi pi-pencil text-primary-1 p-2"
                                onClick={() => {
                                    setValueUpdate('marca_id', row.marca_id);
                                    setValueUpdate('marca_nome', row.marca_nome);
                                    setVisibleEdit(true);
                                }}
                            ></i>
                            <i
                                className="pi pi-trash text-primary-1 p-2"
                                onClick={() => deletar(row.marca_id)}
                            ></i>
                        </div>
                    )}
                />
            </DataTable>

            <Sidebar
                visible={visibleCreate}
                onHide={() => setVisibleCreate(false)}
                position="right"
                header={"Criar"}
                className="bg-white p-4"
            >
                <form onSubmit={handleCreate(criar)}>
                    <label htmlFor="">Nome</label>
                    <input
                        type="text"
                        placeholder="Nome da marca"
                        {...registerCreate('marca_nome', { required: true })}
                    />
                    <button>Criar</button>
                </form>
            </Sidebar>
            <Sidebar
                visible={visibleEdit}
                onHide={() => setVisibleEdit(false)}
                position="right"
                header={"Editar"}
                className="bg-white p-4"
            >
                <form onSubmit={handleUpdate(editar)}>
                    <input type="hidden" {...registerUpdate('marca_id')} />
                    <label htmlFor="">Nome</label>
                    <input
                        type="text"
                        placeholder="Nome da marca"
                        {...registerUpdate('marca_nome', { required: true })}
                    />
                    <button>Editar</button>
                </form>
            </Sidebar>
            <ConfirmDialog />
            <Toast ref={toast} position="bottom-right" />
        </DashboardMarcasContainer>
    );
}

export default DashboardMarcas;