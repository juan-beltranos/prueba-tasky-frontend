"use client";
import React, { useEffect, useState } from "react";
import UserTable from "@/components/Tables/UserTable";
import SmsModal from "@/components/Modal/SmsModal";
import CreateUserModal from "@/components/Modal/CreateUserModal";
import api from '@/utils/api';
import { User, CreateUserForm } from "@/types/types";
import { fetchUsers } from "@/hooks/useUsers";

const initialFormState: CreateUserForm = {
  name: "",
  phone: "",
  profilePictureFile: null,
};

const FormLayout: React.FC = () => {
  const [formState, setFormState] = useState<CreateUserForm>(initialFormState);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [smsModalOpen, setSmsModalOpen] = useState<boolean>(false);
  const [createUserModalOpen, setCreateUserModalOpen] = useState<boolean>(false);
  const [phone, setPhone] = useState<string | null>(null);
  const [smsMessage, setSmsMessage] = useState<string>("");

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      setLoading(true);
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetUsers();
  }, []);

  const openSmsModal = (phone: string) => {
    setPhone(phone);
    setSmsModalOpen(true);
  };

  const closeSmsModal = () => {
    setSmsModalOpen(false);
    setPhone(null);
    setSmsMessage("");
  };

  const sendSms = async () => {
    if (!smsMessage) {
      return alert("El mensaje es obligatorio.");
    }
    try {
      const resp = await api.post("/sms/send", { phone, message: smsMessage });
      alert(resp.data.message);
    } catch (error) {
      console.error("Error sending SMS:", error);
      alert("Error al enviar el SMS");
    } finally {
      closeSmsModal();
    }
  };

  const openCreateUserModal = () => {
    setCreateUserModalOpen(true);
  };

  const closeCreateUserModal = () => {
    setCreateUserModalOpen(false);
  };

  const handleCreateUser = async () => {
    if (!formState.name || !formState.phone || !formState.profilePictureFile) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const cleanedPhone = formState.phone.replace(/^\+57/, '').trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(cleanedPhone)) {
      alert("El teléfono debe contener exactamente 10 números.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("phone", cleanedPhone);

      if (formState.profilePictureFile) {
        formData.append("profilePictureFile", formState.profilePictureFile);
      }

      await api.post("/users", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert("Usuario creado exitosamente");
      setFormState(initialFormState);
      closeCreateUserModal();

      const response = await api.get<User[]>("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error al crear el usuario");
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={openCreateUserModal}
      >
        Crear Usuario
      </button>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <UserTable users={users} openSmsModal={openSmsModal} />
      )}
      <SmsModal
        smsModalOpen={smsModalOpen}
        closeSmsModal={closeSmsModal}
        sendSms={sendSms}
        smsMessage={smsMessage}
        setSmsMessage={setSmsMessage}
      />
      <CreateUserModal
        createUserModalOpen={createUserModalOpen}
        closeCreateUserModal={closeCreateUserModal}
        handleCreateUser={handleCreateUser}
        formState={formState}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default FormLayout;
