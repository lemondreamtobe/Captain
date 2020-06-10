export default function getDataFromMock(payload) {

  if (payload.status) {
    return payload.data;
  } else {
    return payload
  }
}