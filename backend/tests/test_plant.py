from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_plant():
    response = client.post(
        "/api/plants/",
        json={"name": "Test Plant", "garden_id": 1}
    )
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Plant"
    assert data["garden_id"] == 1
    assert "id" in data

def test_read_plant():
    response = client.get("/api/plants/1")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Plant"
    assert data["id"] == 1
    assert data["garden_id"] == 1
