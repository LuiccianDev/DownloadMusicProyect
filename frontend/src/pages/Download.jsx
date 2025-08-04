import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerLoader from "../components/common/SpinnerLoader";
import { useDownloader } from "../hooks/useDownloader";
import { toastConfig } from "../components/toast/toastConfig";

export default function Download() {
  const {
    downloadUrl,
    setDownloadUrl,
    filename,
    setFilename,
    loading,
    handleDownload,
  } = useDownloader();

  return (
    <div className="download-container ">
      <ToastContainer
        {...toastConfig}
        toastStyle={{
          backgroundColor: "rgb(30 41 59)",
          border: "1px solid rgb(51 65 85)",
        }}
        progressStyle={{
          background: "linear-gradient(to right, #8b5cf6, #ec4899)",
        }}
      />

      <div className="download-form-container">
        <h1 className="download-title">Download Music</h1>

        <form className="download-form" onSubmit={handleDownload}>
          <div className="space-y-2">
            <label className="download-label">URL</label>

            <input
              className="download-input"
              type="text"
              placeholder="https://example.com/video"
              value={downloadUrl}
              onChange={(e) => setDownloadUrl(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="download-label">File Name</label>
            <input
              className="download-input"
              type="text"
              placeholder="my-awesome-song"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            />
          </div>

          <button className="download-button" disabled={loading}>
            {loading ? (
              <>
                <SpinnerLoader />
              </>
            ) : (
              "Download Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
