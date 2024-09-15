"use client";

import React, { useEffect, useState } from "react";
import { UserMessages } from "@/types/types";
import { format } from "date-fns";
import api from "@/utils/api";

const FormLayout = () => {
  const [userMessages, setUserMessages] = useState<UserMessages[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserMessages = async () => {
      try {
        const response = await api.get<UserMessages[]>("/users/messages");
        const filteredUsers = Object.values(response.data).filter(user => user.messages.length > 0);
        setUserMessages(filteredUsers);
      } catch (err) {
        setError("No hay mensajes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserMessages();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-9">
      <div className="flex flex-col gap-9">
        {loading ? (
          <p>Cargando mensajes enviados...</p>
        ) : error ? (
          <p>{error}</p>
        ) : userMessages.length > 0 ? (
          userMessages.map((user) => (
            <div
              key={user.phone}
              className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4"
            >
              <h2 className="text-xl font-semibold mb-4">{user.name}</h2>
              <h3 className="text-lg font-medium mb-2">Teléfono: {user.phone}</h3>
              {user.messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded mb-2 shadow-sm"
                >
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs text-gray-600">
                    {format(new Date(msg.timestamp), 'dd MMM yyyy, HH:mm:ss')}
                  </p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No hay mensajes enviados.</p>
        )}
      </div>
    </div>
  );
};

export default FormLayout;
