// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex_) {
  this.pageIndex_ = pageIndex_;
  let page = this.collection.length;
  let res = 0;
  for (let i = 0; i <= this.pageIndex_; i++) {
    res = 0;
    if (page > 4) {
      page -= 4;
      res += 4
    }
    else {
      res += page;
      page-=4;
    }
  }
  return res>0?res:-1
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  this.itemIndex = itemIndex;
  if(this.collection.length===0) return -1
  let index = Math.ceil(this.itemIndex / this.itemsPerPage) - 1;
  if (this.itemIndex <= this.collection.length - 1 && this.itemIndex > 0) {
    return index;
  }else if(this.itemIndex===0){
    return 0;
  }
  return -1;
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

console.log(helper.itemCount()); //should == 6
console.log(helper.pageCount()); //should == 2
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

console.log('_______________');
// pageIndex takes an item index and returns the page that it belongs on
console.log(typeof helper.pageIndex);
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2));  //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1

console.log(helper.pageIndex(0));



  // For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

  // The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

  // The following are some examples of how this class is used:

  // var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
  // helper.pageCount(); //should == 2
  // helper.itemCount(); //should == 6
  // helper.pageItemCount(0); //should == 4
  // helper.pageItemCount(1); // last page - should == 2
  // helper.pageItemCount(2); // should == -1 since the page is invalid

  // // pageIndex takes an item index and returns the page that it belongs on
  // helper.pageIndex(5); //should == 1 (zero based index)
  // helper.pageIndex(2); //should == 0
  // helper.pageIndex(20); //should == -1
  // helper.pageIndex(-10); //should == -1