import { Profile } from "../models/profile";
import asyncHelper from "../utils/asyncHelper";
import convertTimestampToDatetime from "../utils/convertTimestampToDatetime";

const getProfile = asyncHelper(async (req, res) => {
  const profile = await Profile.findOne({ where: { accountId: req.userId } });

  if (profile === null)
    return res.status(404).send({ message: "Profile not found" });

  return res.send(profile.get());
});

const getProfilePublish = asyncHelper(async (req, res) => {
  const profile = await Profile.findOne({ where: { id: req.params.id } });

  if (profile === null)
    return res.status(404).send({ message: "Profile not found" });

  return res.send(profile.get());
});

const createProfile = asyncHelper(async (req, res) => {
  const { body } = req;

  const createProfile = await Profile.create({
    firstName: body.firstName,
    lastName: body.lastName,
    birthday: convertTimestampToDatetime(body.birthday),
    phone: body.phone,
    email: body.email,
    profileImage: body.profileImage,
    educations: body.educations,
    accountId: req.userId,
  }).catch((err) => {
    return res.status(400).send(err);
  });

  return res.send(createProfile);
});

const uploadProfileImage = asyncHelper(async (req, res) => {
  req.body.profileImage = req.file.path;

  const profile = await Profile.findOne({ where: { accountId: req.userId } });

  if (profile === null) return res.status(404).send("profile not found");

  await profile.update({ ...req.body }).catch(() => {
    res.status(422).send({ message: "Unprocessible Entity" });
  });

  return res.send("updated");
});

const updateProfile = asyncHelper(async (req, res) => {
  const profile = await Profile.findOne({ where: { id: req.params.id } });

  if (profile === null) return res.status(404).send("profile not found");

  await profile.update({ ...req.body }).catch(() => {
    res.status(422).send({ message: "Unprocessible Entity" });
  });

  return res.send("updated");
});

export {
  getProfile,
  createProfile,
  uploadProfileImage,
  updateProfile,
  getProfilePublish,
};
