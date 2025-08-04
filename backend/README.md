# Backend

This is the backend for the DownloadMusic project. It is a FastAPI application that handles the music download logic.

## Features

- Download music from YouTube videos in MP3 format.
- API endpoint for downloading music.

## Technologies

- Python 3.11
- FastAPI
- yt-dlp
- Uvicorn

## Getting Started

1. Navigate to the `backend` directory.
2. Create a virtual environment and activate it.
3. Install the dependencies with `uv pip install -r requirements.txt`.
4. Start the server with `uvicorn app.main:app --reload`.

## API Endpoints

- `POST /download`: Downloads a song from a YouTube URL.

For more details on the project, see the [main README](../README.md).