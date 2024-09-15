import React from "react";

interface CreateUserModalProps {
    createUserModalOpen: boolean;
    closeCreateUserModal: () => void;
    handleCreateUser: () => void;
    formState: { name: string; phone: string; profilePictureFile: File | null };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
    createUserModalOpen,
    closeCreateUserModal,
    handleCreateUser,
    formState,
    handleInputChange,
}) => {
    if (!createUserModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={closeCreateUserModal}
                >
                    &#10005;
                </button>
                <h2 className="text-xl font-semibold mb-4">Crear Usuario</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="phone">
                            Teléfono
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={formState.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="profilePicture">
                            Foto de Perfil
                        </label>
                        <input
                            id="profilePicture"
                            name="profilePictureFile"
                            type="file"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="bg-gray-400 text-white px-4 py-2 rounded"
                            onClick={closeCreateUserModal}
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleCreateUser}
                        >
                            Crear Usuario
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUserModal;
