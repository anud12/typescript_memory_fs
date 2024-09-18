import {describe, expect, test} from "@jest/globals";
import {DirectoryMetadata, FileMetadata} from "../src/directoryMetadata";


describe("persistFile", () => {
  test("persistFile", () => {
    const fileMetadata: FileMetadata = {
      data: () => "data",
      name: "fileName",
      childDirectoryNames:["parent", "child"]
    }
    const root = new DirectoryMetadata();
    const documentFile = root.persistFile(fileMetadata);

    expect(documentFile.parentDirectory.getStringPathTo(root)).toEqual("../..")
    expect(root.getStringPathTo(documentFile.parentDirectory)).toEqual("parent/child")
  })

  test("persistFile root", () => {
    const fileMetadata: FileMetadata = {
      data: () => "data",
      name: "fileName",
      childDirectoryNames:[]
    }
    const root = new DirectoryMetadata();
    const documentFile = root.persistFile(fileMetadata);

    expect(documentFile.parentDirectory.getStringPathTo(root)).toEqual("./")
    expect(root.getStringPathTo(documentFile.parentDirectory)).toEqual("./")
  })
})