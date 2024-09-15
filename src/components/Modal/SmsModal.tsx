// src/components/SmsModal.tsx
import React from "react";

interface SmsModalProps {
    smsModalOpen: boolean;
    closeSmsModal: () => void;
    sendSms: () => void;
    smsMessage: string;
    setSmsMessage: (message: string) => void;
}

const SmsModal: React.FC<SmsModalProps> = ({
    smsModalOpen,
    closeSmsModal,
    sendSms,
    smsMessage,
    setSmsMessage,
}) => {
    if (!smsModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={closeSmsModal}
                >
                    &#10005;
                </button>
                <h2 className="text-xl font-semibold mb-4">Enviar SMS</h2>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Escribe tu mensaje..."
                    rows={5}
                    value={smsMessage}
                    onChange={(e) => setSmsMessage(e.target.value)}
                />
                <div className="flex justify-end gap-4">
                    <button
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                        onClick={closeSmsModal}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={sendSms}
                    >
                        Enviar Mensaje
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SmsModal;
