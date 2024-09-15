// src/components/UserTable.tsx
import React from "react";
import { User } from "@/types/types";

interface UserTableProps {
    users: User[];
    openSmsModal: (phone: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, openSmsModal }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-boxdark border-collapse">
                <thead>
                    <tr>
                        <th className="text-left py-2 px-4 border-b">Nombre</th>
                        <th className="text-left py-2 px-4 border-b">Teléfono</th>
                        <th className="text-left py-2 px-4 border-b">Foto de perfil</th>
                        <th className="text-left py-2 px-4 border-b">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.profilePicture}>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.phone}</td>
                                <td className="py-2 px-4 border-b">
                                    <img
                                        src={user.profilePicture}
                                        alt={user.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                        onClick={() => openSmsModal(user.phone)}
                                    >
                                        Enviar SMS
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="py-2 px-4 border-b text-center">
                                No hay usuarios registrados.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
