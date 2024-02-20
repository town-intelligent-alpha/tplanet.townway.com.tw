$(document).ready(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const uuid = urlParams.get("uuid");

  if (uuid) {
    $.ajax({
      url: "http://125.229.172.232:5567/projects/get_sroi_evidence_identifiers",
      type: "POST",
      data: {
        uuid_project: uuid,
      },
      success: (response) => {
        $("#SOCIAL").html(`<ul>
          ${response.SOCIAL.map(
            (item) =>
              `<div class='d-flex justify-content-between align-items-center'><li class="mr-5">${item.id}${item.name}</li><input class="form-control w-50 my-2" type="text" placeholder="請填入可檢視雲端連結" /></div>`
          ).join("")}
          </ul>`);
        $("#ECONOMY").html(`<ul>
          ${response.ECONOMY.map(
            (item) =>
              `<div class='d-flex justify-content-between align-items-center'><li class="mr-5">${item.id}${item.name}</li><input class="form-control w-50 my-2" type="text" placeholder="請填入可檢視雲端連結" /></div>`
          ).join("")}
          </ul>`);
        $("#ENVIRONMENT").html(`<ul>
          ${response.ENVIRONMENT.map(
            (item) =>
              `<div class='d-flex justify-content-between align-items-center'><li class="mr-5">${item.id}${item.name}</li><input class="form-control w-50 my-2" type="url" placeholder="請填入可檢視雲端連結" /></div>`
          ).join("")}
          </ul>`);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  $("a.btn-dark").attr("href", "cms_sroi.html?uuid=" + uuid);

  $("#save-btn").on("click", () => {
    var sroi_evidences = [];
    $("input.form-control").each(function () {
      const value = $(this).val();
      if (value != "") {
        sroi_evidences.push({
          id: $(this).siblings("li").text(),
          reference: value,
        });
      }
    });
    $.ajax({
      url: "http://125.229.172.232:5567/projects/set_sroi_evidences",
      type: "POST",
      data: {
        project_uuid: uuid,
        sroi_evidences: sroi_evidences,
      },
      success: (response) => {
        console.log("success");
      },
      error: (error) => {
        console.log(error);
      },
    });
  });
});