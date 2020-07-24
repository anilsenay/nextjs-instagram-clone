import React from "react";
import Modal from "./modal";

export default function MoreModalItems() {
  return (
    <Modal>
      <button
        className="modal-box-item h-12 bg-white w-full text-14-bold text-red"
        onClick={() => console.log("test")}
      >
        Şikayet
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-bold text-red">
        Takibi bırak
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Gönderiye Git
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Paylaş
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Kopyala
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        Sitene Göm
      </button>
      <button className="modal-box-item h-12 bg-white w-full text-14-light">
        İptal
      </button>
    </Modal>
  );
}
