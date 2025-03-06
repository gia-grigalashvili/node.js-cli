import fs from "fs";
import http from "http";
import open from "open ";

// HTML შაბლონის მონაცემთა ჩანაცვლება
const interpolate = (html, data) => {
  const re = /{{\s*([^{}]+)\s*}}/g;
  return html.replace(re, (_, p1) => data[p1] || "");
};
// ჰოუფების ფორმატირება HTML-ში ჩასასმელად
const formatHopes = (hopes) => {
  return hopes
    .map((hope) => {
      return `
            <div class="hope">
              <h2>${hope.content}</h2>
              <div class="tags">
                ${hope.tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
          `;
    })
    .join("");
};
