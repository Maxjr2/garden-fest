from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_garden():
    response = client.post(
        "/api/gardens/",
        json={"name": "Test Garden"}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Garden"
    assert "id" in data

def test_read_garden():
    response = client.get("/api/gardens/1")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Garden"
    assert data["id"] == 1
