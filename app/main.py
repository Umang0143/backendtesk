# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import json
# import os
# import uuid

# app = FastAPI()

# # CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# JSON_FILE = "profile.json"

# if not os.path.exists(JSON_FILE):
#     with open(JSON_FILE, "w") as f:
#         json.dump([], f)


# def read_data():
#     with open(JSON_FILE, "r") as f:
#         return json.load(f)


# def write_data(data):
#     with open(JSON_FILE, "w") as f:
#         json.dump(data, f, indent=4)


# class Profile(BaseModel):
#     fullName: str
#     email: str
#     phone: str
#     dob: str
#     companyName: str
#     gstNumber: str
#     companyEmail: str
#     website: str
#     companyAddress: str


# @app.get("/")
# def home():
#     return {"message": "FastAPI Running"}


# # GET ALL
# @app.get("/profile")
# def get_profiles():
#     return read_data()


# # GET ONE
# @app.get("/profile/{profile_id}")
# def get_profile(profile_id: str):
#     data = read_data()

#     for item in data:
#         if item["id"] == profile_id:
#             return item

#     raise HTTPException(status_code=404, detail="Profile not found")


# # CREATE
# @app.post("/profile")
# def create_profile(profile: Profile):
#     data = read_data()

#     new_profile = {
#         "id": str(uuid.uuid4()),
#         **profile.dict()
#     }

#     data.append(new_profile)

#     write_data(data)

#     return {
#         "success": True,
#         "message": "Profile Saved Successfully",
#         "data": new_profile
#     }


# # UPDATE
# @app.put("/profile/{profile_id}")
# def update_profile(profile_id: str, profile: Profile):

#     data = read_data()

#     for index, item in enumerate(data):

#         if item["id"] == profile_id:

#             data[index] = {
#                 "id": profile_id,
#                 **profile.dict()
#             }

#             write_data(data)

#             return {
#                 "success": True,
#                 "message": "Profile Updated Successfully"
#             }

#     raise HTTPException(status_code=404, detail="Profile not found")


# # DELETE
# @app.delete("/profile/{profile_id}")
# def delete_profile(profile_id: str):

#     data = read_data()

#     new_data = [item for item in data if item["id"] != profile_id]

#     if len(new_data) == len(data):
#         raise HTTPException(status_code=404, detail="Profile not found")

#     write_data(new_data)

#     return {
#         "success": True,
#         "message": "Profile Deleted Successfully"
#     }



from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

DB_FILE = "db.json"


def read_db():
    with open(DB_FILE, "r") as f:
        return json.load(f)


def write_db(data):
    with open(DB_FILE, "w") as f:
        json.dump(data, f, indent=2)


# ---------------- MODELS ----------------

class Personal(BaseModel):
    fullName: str
    email: str
    phone: str
    dob: str


class Company(BaseModel):
    companyName: str
    gstNumber: str
    companyEmail: str
    website: str
    companyAddress: str


# ---------------- CREATE FULL PROFILE ----------------

@app.post("/profile")
def create_profile(data: dict):
    db = read_db()

    new_item = {
        "id": str(uuid.uuid4()),
        "personal": data["personal"],
        "company": data["company"]
    }

    db.append(new_item)
    write_db(db)

    return {"message": "Profile Created", "data": new_item}


# ---------------- GET ALL ----------------

@app.get("/profile")
def get_all():
    return read_db()


# ---------------- GET SINGLE ----------------

@app.get("/profile/{id}")
def get_one(id: str):
    db = read_db()

    for item in db:
        if item["id"] == id:
            return item

    raise HTTPException(status_code=404, detail="Not found")


# ---------------- UPDATE PERSONAL ONLY ----------------

@app.put("/profile/personal/{id}")
def update_personal(id: str, data: Personal):
    db = read_db()

    for item in db:
        if item["id"] == id:
            item["personal"] = data.dict()
            write_db(db)
            return {"message": "Personal Updated"}

    raise HTTPException(status_code=404, detail="Not found")


# ---------------- UPDATE COMPANY ONLY ----------------

@app.put("/profile/company/{id}")
def update_company(id: str, data: Company):
    db = read_db()

    for item in db:
        if item["id"] == id:
            item["company"] = data.dict()
            write_db(db)
            return {"message": "Company Updated"}

    raise HTTPException(status_code=404, detail="Not found")


# ---------------- DELETE PERSONAL ONLY ----------------

@app.delete("/profile/personal/{id}")
def delete_personal(id: str):
    db = read_db()

    for item in db:
        if item["id"] == id:
            item["personal"] = {}
            write_db(db)
            return {"message": "Personal Deleted"}

    raise HTTPException(status_code=404)


# ---------------- DELETE COMPANY ONLY ----------------

@app.delete("/profile/company/{id}")
def delete_company(id: str):
    db = read_db()

    for item in db:
        if item["id"] == id:
            item["company"] = {}
            write_db(db)
            return {"message": "Company Deleted"}

    raise HTTPException(status_code=404)