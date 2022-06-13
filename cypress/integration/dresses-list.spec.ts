import {MenuContentPage, DressesListPage} from "../page/index";


describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    // Arrange
    const expectedDressNames = [
      "Printed Dress", "Printed Dress", "Printed Summer Dress",
      "Printed Summer Dress", "Printed Chiffon Dress",
    ];

    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToDressesMenu();

    // Assert
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(expectedDressNames);
  });
});
